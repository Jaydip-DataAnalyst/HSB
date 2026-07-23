import { useNavigate } from "react-router-dom"

const PlaceCard = ({ place }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/places/${place.id}`);
    };

    return (
        <div onClick={handleNavigate} className="w-40 md:w-52 cursor-pointer">
            <img
                src={place.img}
                alt={place.title}
                className="rounded-lg shadow-md"
            />
            <p className="mt-2 font-medium">{place.title}</p>
            <p className="text-sm text-gray-500 truncate">
                {place.regions?.join(" | ") ?? ""}
            </p>
        </div>
    );
};
export default PlaceCard;