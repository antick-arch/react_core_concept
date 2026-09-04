import { Bounce, toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
    console.log(cart);
    const handleOrder = () => {
        setCart([]);
        toast.success('Order successful', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Cart Section</h2>
            {
                cart.map(p => (
                    <p key={p.idMeal}>{p.strMeal}</p>
                ))
            }
            <button onClick={handleOrder}>Order</button>
        </div>
    );
};

export default Cart;