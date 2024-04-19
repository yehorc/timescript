/* List of all available parsing tokens
-----------------------------------------
Input   Example             Description
-----------------------------------------
YY	    01	                Two-digit year
YYYY	2001	            Four-digit year
MM	    01-12	            Month, 2-digits
MMM	    Jan-Dec	            The abbreviated month name
D	    1-31	            Day of month
DD	    01-31	            Day of month, 2-digits
*/

export function formatDate(format: string, date: Date): string {
    const tokenMap: Record<string, string> = {
        YYYY: date.getFullYear().toString(),
        YY: date.getFullYear().toString().slice(-2),
        MMM: date.toLocaleString('default', {month: 'short'}),
        MM: (date.getMonth() + 1).toString().padStart(2, '0'),
        DD: date.getDate().toString().padStart(2, '0'),
        D: date.getDate().toString()
    }

    let formattedDate = format
    for (const token in tokenMap) {
        formattedDate = formattedDate.replace(token, tokenMap[token])
    }

    return formattedDate
}
