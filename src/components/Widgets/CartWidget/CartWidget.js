import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
/* import Button from '@mui/material/Button'; */
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../../context/CartContext'
import { useState, useContext } from 'react';
import './CartWidget.css';

const CartWidget = () => {
    const { cartListItems, totalPrice } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className='cart-container-icon'>
            <ShoppingCartIcon
                style={{fontSize:40}} 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod-image'>
                                <img src={`/img/${item.image}`} alt="prod carrito" />
                            </div>
                            <div className='cart-prod-info'>
                                <span>{item.title}</span>
                                <span>${item.price}</span>
                                <span>Cantidad: {item.countItem}</span>
                                {/* <span>Precio Total: {`${totalPrice * item.countItem}`}</span> */}
                            </div>
                            <div className='cart-icon-delete'>
                                <button>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget