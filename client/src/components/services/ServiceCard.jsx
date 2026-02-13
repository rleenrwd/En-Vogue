export default function ServiceCard({ service }) {
    return (
        <li>
            {service.name} - ${service.price}
        </li>
    );
}