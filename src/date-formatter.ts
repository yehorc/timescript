// ./src/date-formatter.ts

/* List of all available parsing tokens
-----------------------------------------
Input   Example             Description
-----------------------------------------
YY	    01	                Two-digit year
YYYY	  2001	              Four-digit year
MM	    01-12	              Month, 2-digits
MMM	    Jan-Dec	            The abbreviated month name
D	      1-31	              Day of month
DD	    01-31	              Day of month, 2-digits
*/

// Dummy commit #2

export function formatDate (format: string, date: Date = new Date()): string {
  if (!/^(YY|YYYY|MMM|MM|DD|D)(-(YY|YYYY|MMM|MM|DD|D))*$/.test(format)) {
    throw new Error("Invalid format string. Use YY, YYYY, MMM, MM, DD, D seperated by '-'")
  }

  // pad single digit numbers with a leading zero
  const pad = (n: number) => n < 10 ? `0${n}` : `${n}`

  // month names
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // Replace format string with actual date parts
  return format.replace(/YYYY|YY|MMM|MM|DD|D/g, (match) => {
    switch (match) {
      case 'YY':
        return date.getFullYear().toString().slice(-2)
      case 'YYYY':
        return date.getFullYear().toString()
      case 'MMM':
        return monthNames[date.getMonth()]
      case 'MM':
        return pad(date.getMonth() + 1)
      case 'DD':
        return pad(date.getDate())
      case 'D':
        return date.getDate().toString()
      default:
        return match
    }
  })
}
