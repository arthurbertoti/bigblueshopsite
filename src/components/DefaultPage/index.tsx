import { Outlet } from 'react-router-dom'
export default function DefaultPage() {
    return (
        <>
            <div>
                <h1>Default Page (title)</h1>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}