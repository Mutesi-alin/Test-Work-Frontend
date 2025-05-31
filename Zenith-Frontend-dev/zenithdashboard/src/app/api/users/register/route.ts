// src/app/api/users/register/route.ts

import { NextRequest, NextResponse } from 'next/server';

const baseUrl = process.env.BASE_URL;

export async function POST(request: NextRequest) {
  console.log('API route called');
  
  if (!baseUrl) {
    console.error('BASE_URL environment variable is not set.');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    console.log('Received request body:', body);
    
    const { first_name, last_name, phone_number, email, password, role } = body;

    // Validate required fields
    if (!first_name || !last_name || !email || !password || !role) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const requestData = { 
      first_name, 
      last_name, 
      phone_number, 
      email, 
      password, 
      role 
    };

    console.log('Sending to backend:', `${baseUrl}/users/register`);
    console.log('Request data:', requestData);

    const response = await fetch(`${baseUrl}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const textResponse = await response.text();
    console.log('Backend response:', textResponse);
    console.log('Backend status:', response.status);

    if (!response.ok) {
      let errorMessage = 'Registration failed';
      
      try {
        const errorData = JSON.parse(textResponse);
        errorMessage = errorData.message || errorData.error || errorData.detail || textResponse;
      } catch {
        errorMessage = textResponse || 'Registration failed';
      }
      
      console.error('Backend error:', errorMessage);
      
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    let result;
    try {
      result = JSON.parse(textResponse);
      console.log('Parsed result:', result);
    } catch {
      console.error('Failed to parse backend response as JSON');
      return NextResponse.json(
        { error: 'Invalid response from server' },
        { status: 500 }
      );
    }

    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}