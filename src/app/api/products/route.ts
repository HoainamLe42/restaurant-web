// app/api/products/route.ts
export async function GET() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            console.error('❌ External API responded with status', res.status);
            return new Response('External API error', { status: 500 });
        }

        const data = await res.json();
        console.log('✅ API fetched data:', data); // ← check data tại đây

        return Response.json(data);
    } catch (error: any) {
        console.error('❌ Fetch failed:', error.message);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}
