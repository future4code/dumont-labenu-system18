export default function convertFormat(date: string): string {
    return date
    .split("/")
    .reverse()
    .join("-")        
 }