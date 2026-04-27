export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method not allowed' });
  }

  const { model, messages, max_tokens, temperature, system } = req.body;

  // build the messages array including the optional system prompt
  const fullMessages = system
    ? [{ role: 'system', content: system }, ...messages]
    : messages;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.GROQ_API_KEY
      },
      body: JSON.stringify({
        model: model || 'llama-3.1-8b-instant',
        messages: fullMessages,
        max_tokens: max_tokens || 200,
        temperature: temperature ?? 0.7
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    // pass back only the text so the frontend stays simple
    const text = data.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ text });

  } catch (err) {
    return res.status(500).json({ error: 'server error', detail: err.message });
  }
}