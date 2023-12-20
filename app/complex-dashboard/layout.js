export default function Layout({ children, users, notification, revenue }) {
    return (
        <>
        <div>{children}</div>
        <div style={{display: "flex"}}>
            <div>{revenue}</div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>{users}</div>
                <div>{notification}</div>
            </div>
        </div>
        
        </>
    )
    }