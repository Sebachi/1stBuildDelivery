import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Restaurant from '../pages/Restaurant/restaurant'
import Food from '../pages/food/Food'

const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<Restaurant />} />
                    <Route path="restaurant" element={<Restaurant />} />
                    <Route path=":idFood" element={<Food />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Router