import { Header } from ".."

export const WeatherApp = () => {
  return (
    <div>
        <Header />
        <div>
            <Outlet />
        </div>



    </div>
  )
}
