export default interface Notification {
    id: number
    content: string
    url: string|null
    was_read: boolean
}
