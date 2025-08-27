import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { event, data } = req.body;
    
    console.log("Analytics event:", { 
      event, 
      data, 
      timestamp: new Date().toISOString() 
    });
    
    res.json({ success: true });
  } catch (error) {
    console.error("Analytics error:", error);
    res.status(500).json({ success: false });
  }
}
