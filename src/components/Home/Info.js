import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function Info() {
	return (
		<section className="py-5">
			<div className="container">
				<Title title="our story" />
				<div className="row">
					<div className="col-10 col-sm-8 mx-auto text-center">
						<p className="lead text-muted mb-5">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rem quidem maiores, laudantium
							tempora reiciendis dolore sequi inventore explicabo! Consequatur soluta ipsum assumenda
							nulla nesciunt perspiciatis omnis deserunt similique quibusdam. Nemo et aliquam molestias!
							Sed et perferendis eligendi beatae atque culpa odio enim ratione error veritatis, nisi,
							voluptatibus natus nostrum!
						</p>
						<Link to="/about/">
							<button className="btn text-uppercase btn-yellow">About Page</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
