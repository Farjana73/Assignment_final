import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
	const slides = [
		{
			image: "https://img.freepik.com/free-photo/digital-circle-circuit-blue-background-futuristic-technology_53876-124643.jpg?uid=R66188868&ga=GA1.1.836500987.1705486275&semt=ais_hybrid",
			title: "Welcome to MERN stack development",
			description: "Your journey to mastering coding starts here.",
		},
		{
			image:
				"https://img.freepik.com/free-vector/abstract-digital-technology-background-with-network-connection-lines_1017-25552.jpg?uid=R66188868&ga=GA1.1.836500987.1705486275&semt=ais_hybrid",
			title: "Unlimited Learn with fun",
			description: "Flexible and accessible courses for everyone.",
		},
		{
			image: "https://i.ibb.co.com/BwWXG7M/roonz-nl-2x-EQDx-B0ss4-unsplash.jpg",
			title: "You Can Join Our Team",
			description: "Connect with learners and mentors globally.",
		},
	];
	return (
		<div className="hero-section text-dark text-center">
			<Carousel>
				{slides.map((slide, index) => (
					<Carousel.Item key={index}>
						<img
							className="d-block w-100"
							src={slide.image}
							alt={`Slide ${index + 1}`}
							style={{ maxHeight: "600px", objectFit: "cover" }}
						/>
						<Carousel.Caption>
							<h3 className="display-4">{slide.title}</h3>
							<p className="h5">{slide.description}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default Hero;
