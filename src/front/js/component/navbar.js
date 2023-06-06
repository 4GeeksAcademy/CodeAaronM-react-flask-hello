import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "../pages/loginModal";

export const Navbar = () => {
	return (
		<nav id="navbar-design" className="navbar sticky-top pt-0 mt-0 mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand fs-2 mb-0 color-font">GitLoot</span>
				</Link>
				<div className="ml-auto">
					<div className="btn-group dropstart">
						<button type="button" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}}
							className="btn btn-outline-info dropdown-toggle px-5" data-bs-toggle="dropdown" aria-expanded="false">
								Tu loot!
						</button>
						<ul className="dropdown-menu">
							<li className="dropdown-item">Loot 1</li>
							<li className="dropdown-item">Loot 2</li>
							<li className="dropdown-item">Loot 3</li>
							<li className="dropdown-item">This shalt clear thy loot</li>
						</ul>
					</div>
					<button type="button" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}} className="btn btn-outline-primary py-2 px-5" data-bs-toggle="modal" data-bs-target="#loginModal">
						Login
					</button>
					<Link to="/register">
						<button type="button" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}} className="btn btn-outline-success py-2 px-5">
							Registrate!
						</button>
					</Link>
					<Link to="/profile">
						<button type="button" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}} className="btn btn-outline-secondary py-2 px-5">
							Perfil
						</button>
					</Link>
				</div>
			</div>
		</nav>
		
		
	);
};














