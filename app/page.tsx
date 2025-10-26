import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import events from "@/lib/constants";

const Page = () => {
	console.log("Test component");

	return (
		<main>
			<section>
				<h1 className="text-center">
					The place to discover
					<br /> developer events worldwide.
				</h1>
				<p className="text-center mt-4">
					Conferences, Networking and the latest tech updates, all in one place
				</p>
				<ExploreBtn />
				<div className="mt-20 space-y-7">
					<h3>Featured Events</h3>
					<ul className="events">
						{events.map(event => (
							<li key={event.title} className="list-none">
								<EventCard {...event} />
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
};

export default Page;
