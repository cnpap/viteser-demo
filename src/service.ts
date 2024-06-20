export async function runInServer(name: string) {
  "use server"

  /**
   * use mysql、redis or any other server-side services
   */
  console.log(`Hello ${name}! in server`)

  return `Hello ${name}!`
}