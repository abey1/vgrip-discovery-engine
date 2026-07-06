export function filterUrls(results: any[]) {
    const allowedPatterns = ["/staff", "/people", "/profile", "/researcher", "/team"];
   
    return results
      .map(r => r.link)
      .filter(url => {
        const domainOk =
          url.includes(".ac.uk") || url.includes(".edu");
   
        const pathOk = allowedPatterns.some(p => url.includes(p));
   
        return domainOk && pathOk;
      });
   }
   