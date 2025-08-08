import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface NotificationRequest {
  type: 'contact' | 'booking';
  data: {
    name: string;
    email: string;
    phone: string;
    message?: string;
    service?: string;
    date?: string;
    time?: string;
    amount?: number;
    bookingId?: string;
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { type, data }: NotificationRequest = await req.json()
    
    // Email notification
    await sendEmailNotification(type, data)
    
    // WhatsApp notification
    await sendWhatsAppNotification(type, data)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Notifications sent successfully' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})

async function sendEmailNotification(type: string, data: any) {
  // Using Resend API for email
  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
  
  if (!RESEND_API_KEY) {
    console.log('No Resend API key found, skipping email notification')
    return
  }

  const subject = type === 'contact' 
    ? `New Contact Form Submission from ${data.name}` 
    : `New Booking: ${data.service} - ${data.name}`
    
  const htmlContent = type === 'contact' 
    ? getContactEmailTemplate(data)
    : getBookingEmailTemplate(data)

  const emailData = {
    from: 'BigBull Fitness <noreply@bigbullfitness.com>',
    to: ['pandeyasameer4@gmail.com'],
    subject: subject,
    html: htmlContent
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    })
    
    if (!response.ok) {
      throw new Error(`Email API error: ${response.status}`)
    }
    
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Email sending failed:', error)
  }
}

async function sendWhatsAppNotification(type: string, data: any) {
  // Using WhatsApp Business API or a service like Twilio
  const phoneNumber = '+9779865939331'
  
  const message = type === 'contact'
    ? `🔥 *NEW CONTACT FROM BIGBULL FITNESS* 🔥\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Service Interest:* ${data.service || 'Not specified'}\n*Message:* ${data.message || 'No message'}\n\n_Received via BigBull Fitness Website_`
    : `💪 *NEW BOOKING CONFIRMED* 💪\n\n*Booking ID:* ${data.bookingId}\n*Name:* ${data.name}\n*Service:* ${data.service}\n*Date:* ${data.date}\n*Time:* ${data.time}\n*Phone:* ${data.phone}\n*Email:* ${data.email}\n*Amount:* ₹${data.amount}\n\n_BigBull Fitness - Train Like A Bull!_`

  // For demo purposes, we'll log the WhatsApp message
  // In production, integrate with WhatsApp Business API or Twilio
  console.log(`WhatsApp message for ${phoneNumber}:`, message)
  
  // Here you would integrate with actual WhatsApp API
  // Example with Twilio WhatsApp:
  /*
  const TWILIO_SID = Deno.env.get('TWILIO_SID')
  const TWILIO_TOKEN = Deno.env.get('TWILIO_TOKEN')
  const TWILIO_WHATSAPP = Deno.env.get('TWILIO_WHATSAPP_NUMBER')
  
  if (TWILIO_SID && TWILIO_TOKEN && TWILIO_WHATSAPP) {
    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`
    
    const formData = new URLSearchParams()
    formData.append('From', `whatsapp:${TWILIO_WHATSAPP}`)
    formData.append('To', `whatsapp:${phoneNumber}`)
    formData.append('Body', message)
    
    const response = await fetch(twilioUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${TWILIO_SID}:${TWILIO_TOKEN}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    })
    
    if (response.ok) {
      console.log('WhatsApp message sent successfully')
    }
  }
  */
}

function getContactEmailTemplate(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #dc2626; margin-bottom: 5px; }
        .value { color: #333; line-height: 1.5; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔥 New Contact Form Submission</h1>
          <p>BigBull Fitness - Train Like A Bull!</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          <div class="field">
            <div class="label">Service Interest:</div>
            <div class="value">${data.service || 'Not specified'}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message || 'No message provided'}</div>
          </div>
        </div>
        <div class="footer">
          <p>Received via BigBull Fitness Website</p>
          <p><strong>Contact them back quickly to convert this lead! 💪</strong></p>
        </div>
      </div>
    </body>
    </html>
  `
}

function getBookingEmailTemplate(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .booking-id { background: #fef2f2; border: 2px dashed #dc2626; padding: 15px; text-align: center; margin: 20px 0; border-radius: 8px; }
        .field { margin-bottom: 15px; display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f0f0f0; }
        .label { font-weight: bold; color: #dc2626; }
        .value { color: #333; }
        .amount { font-size: 1.5em; color: #dc2626; font-weight: bold; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💪 NEW BOOKING CONFIRMED</h1>
          <p>BigBull Fitness - Train Like A Bull!</p>
        </div>
        <div class="content">
          <div class="booking-id">
            <strong>Booking ID: ${data.bookingId}</strong>
          </div>
          
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${data.email}</span>
          </div>
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value">${data.phone}</span>
          </div>
          <div class="field">
            <span class="label">Service:</span>
            <span class="value">${data.service}</span>
          </div>
          <div class="field">
            <span class="label">Date:</span>
            <span class="value">${data.date}</span>
          </div>
          <div class="field">
            <span class="label">Time:</span>
            <span class="value">${data.time}</span>
          </div>
          <div class="field">
            <span class="label">Amount:</span>
            <span class="value amount">₹${data.amount}</span>
          </div>
        </div>
        <div class="footer">
          <p><strong>⚡ Action Required: Contact the customer to confirm the session details!</strong></p>
          <p>Phone: ${data.phone} | Email: ${data.email}</p>
        </div>
      </div>
    </body>
    </html>
  `
}