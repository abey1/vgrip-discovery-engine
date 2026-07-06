export function extractEmail(html: string): string | null {
    const match = html.match(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
    );
   
    return match?.[0] || null;
   }
   