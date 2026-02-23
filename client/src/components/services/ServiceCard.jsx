export default function ServiceCard({ service }) {
    return (
        <li>
            {service.name} - ${service.price} <img src={service.image} alt="" />
        </li>
    );
}