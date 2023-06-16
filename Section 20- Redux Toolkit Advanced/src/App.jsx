import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";
import { cartAcrions } from "./store/cart-slice";

let initial = true;
function App() {
    const dispath = useDispatch();
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);
    console.log(`Initial: ${initial}`);
    console.log(`Cart changed: ${cart.changed}`);

    // Fetching cart data
    useEffect(() => {
        dispath(
            uiActions.showNotification({
                status: "pending",
                title: "Fetching data...",
                message: "Fetching cart data...",
            })
        );

        const fetchingData = async () => {
            const response = await fetch(
                "https://redux-advanced-ad133-default-rtdb.europe-west1.firebasedatabase.app/redux.json"
            );

            if (!response.ok) {
                throw new Error("Fetching cart data failed");
            }

            const data = await response.json();
            dispath(
                cartAcrions.replaceCartData({
                    items: data.items,
                    totalQuantity: data.totalQuantity,
                })
            );
            dispath(
                uiActions.showNotification({
                    status: "succes",
                    title: "Succes",
                    message: "Successfully fetched!!!",
                })
            );
        };
        fetchingData().catch((error) => {
            dispath(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Fetching data failed...",
                })
            );
        });
    }, []);

    useEffect(() => {
        const sendCartData = async () => {
            dispath(
                uiActions.showNotification({
                    status: "pending",
                    title: "Sending...",
                    message: "Sending cart data...",
                })
            );

            const response = await fetch(
                "https://redux-advanced-ad133-default-rtdb.europe-west1.firebasedatabase.app/redux.json",
                {
                    method: "PUT",
                    body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }),
                    //If we JSON.stringify(cart) cart.changed will stay that's why send
                    //JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }),
                }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed");
            }

            dispath(
                uiActions.showNotification({
                    status: "succes",
                    title: "Succes",
                    message: "Successfully sent",
                })
            );
        };

        if (initial) {
            initial = false;
            return;
        }

        if (cart.changed) {
            sendCartData().catch((error) => {
                dispath(
                    uiActions.showNotification({
                        status: "error",
                        title: "Error!",
                        message: "Sending cart data failed...",
                    })
                );
            });
        }
    }, [cart]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
