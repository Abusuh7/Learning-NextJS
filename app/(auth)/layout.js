export default function AuthLayout({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Set minimum height to fill the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
      }}
    >

      {/* Main content */}
      <main>{children}</main>

      
    </div>
  );
}
