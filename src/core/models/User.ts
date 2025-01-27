export default interface User {
    id: number|undefined
    name: string
    email: string
    password: string
    user_type: number
    token: string
    user_type_name: string
    avatar_image_url: string
    is_admin: boolean
    is_default: boolean
    created_at: string
    updated_at: string
}