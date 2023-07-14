import { Navigate, useNavigate } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			
			users: [],
     		token: localStorage.getItem("token") || "",
			products: [],
			favorites: [],
			reviews: [],
			garages: [],
			garage: []
		
		},

		actions: {
			login: async (email, password) => {
				const store = getStore();
				const opts = {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${store.token}`
				  },
				  body: JSON.stringify({
					email: email,
					password: password
				  })
				};
			  
				try {
				  const resp = await fetch(`${process.env.BACKEND_URL}api/login`, opts);
				  const data = await resp.json();
				  localStorage.setItem("token", data.token);
				  setStore({ "token": data.token });
				  console.log(data);
				} catch (error) {
				  console.error(error);
				}
			  },
		
			getUser: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + `api/configuration`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({user: response.data});
				});
			},


			getToken: () => {
				const store = getStore()
				if (localStorage.getItem("token")) {
				  return localStorage.getItem("token"); 
				}
				return store.token; 
			  },


			//   login: async (email, password) => {
            //     const store = getStore()
            //     const opts = {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "Application/json",
            //             Authorization: Bearer ${store.token}
            //         },
            //         body: JSON.stringify({
            //             email: email,
            //             password: password
            //         })
            //     }
            //     const resp = await fetch(process.env.BACKEND_URL+"api/login", opts)
            //     const data = await resp.json()
            //     localStorage.setItem("token", data.token)
            //     setStore({"token": data.token})
            //     console.log(data)
            // },
			  
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			

			getGarages: () => {
				fetch("https://fencer1993-super-lamp-9vvqv656vx7fp9jx-3001.preview.app.github.dev/api/garages" , {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("token")}`
				}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({garages: response})
					console.log(response)
				});
			},

			getMyGarage: () => {
				fetch(process.env.BACKEND_URL + `api/profile/garage`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("token")}`
				}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({garage: response})
					console.log(response)
				});
			},


			postGarage: async (name, mail, phone, cif, address, description, web, user_id, image_id) => {
				const token = localStorage.getItem("token");
			  
				try {
				  // Realiza una solicitud GET para obtener el taller del usuario
				//   const garageResponse = await fetch(process.env.BACKEND_URL + "api/profile/garage", {
				// 	method: "GET",
				// 	headers: {
				// 	  "Content-Type": "application/json",
				// 	  Authorization: `Bearer ${token}`
				// 	}
				//   });
				//   const garageData = await garageResponse.json();
				//   const myGarage = garageData.garage;
			  
				//   // Comprueba si ya existe un garaje con las mismas propiedades
				//   const isGarage = myGarage.some(garage => (
				// 	garage.name === name ||
				// 	garage.address === address||
				// 	garage.phone === phone
				//   ));
			  
				//   if (isGarage) {
				// 	console.log("El garaje ya existe.");
				// 	const navigate = useNavigate()
				// 	navigate("/create-garage")
				//   } else {
					const requestOptions = {
					  method: "POST",
					  headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					  },
					  body: JSON.stringify({
						name: name,
						mail: mail,
						phone: phone,
						cif: cif,
						address: address,
						description: description,
						web: web,
						user_id: user_id,
						image_id: image_id
					  })
					};
			  
					const response = await fetch(`${process.env.BACKEND_URL}api/create-garage`, requestOptions);
					if (response.ok) {
					  const data = await response.json();
					  console.log(data);
					  // Realiza las acciones necesarias después de un registro exitoso
					} else {
					  throw new Error("Error al registrar el garaje");
					}
				  
				} catch (error) {
				  console.error(error);
				  // Realiza las acciones necesarias en caso de error
				}
			  },
			  

			


			getProducts: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + `api/profile/onsale`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({ products: response.data });
					console.log(response.data)
				})
			},
			getFavorites: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + `api/profile/favorites`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({ favorites: response});
					console.log(response.data)
				})
			},
			postFavorite: (product_id) => {
				const token = localStorage.getItem("token");
			  
				// Primero, realiza una solicitud GET para obtener la lista de productos favoritos del usuario
				fetch(process.env.BACKEND_URL + "api/profile/favorites", {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				  }
				})
				.then(response => response.json())
				.then(data => {
				  const favorites = data.favorites;
				  const isProductFavorited = favorites.some(favorite => favorite.product_id === product_id);
			  
				  if (isProductFavorited) {
					console.log("El producto ya está guardado como favorito.");
				  } else {
					const requestOptions = {
					  method: "POST",
					  headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					  },
					  body: JSON.stringify({ product_id })
					};
			  
					fetch(process.env.BACKEND_URL + "api/profile/favorites", requestOptions)
					  .then(response => response.json())
					  .then(data => {
						console.log(data);
					  })
					  .catch(error => {
						console.error("Error:", error);
					  });
				  }
				})
				.catch(error => {
				  console.error("Error:", error);
				});
			},

			putFavorite: (product_id) => {
				const token = localStorage.getItem("token");
				const requestOptions = {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				  }
				};
			  
				fetch(process.env.BACKEND_URL + `api/profile/favorites/${product_id}`, requestOptions)
				  .then(response => response.json())
				  .then(data => {
					console.log(data);
				  })
				  .catch(error => {
					console.error("Error:", error);
				  });
			},

			getReviews: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + `api/profile/reviews`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				.then (response => response.json())
				.then ((response) => {
					setStore({ reviews: response});
					console.log(garages)
				})
			},
		}
	}
};

export default getState;


