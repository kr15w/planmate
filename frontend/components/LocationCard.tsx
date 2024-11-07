import { ReactNode } from "react";
import { Image } from "react-native";
interface Props {
    name: String;
    image: String;
    children: ReactNode;
}
export default function LocationCard (props: Props) {
    return (
        <>
            <h1>{props.name}</h1>
            <Image  style={{width: 50, height: 50}} source={{uri: "assets/images/bana.jpg"}}/>
            {props.children}
            <ul>
                {props.info.map((item, index) => (
                    <li key={index}>
                        <h3>{item[0]}</h3>
                        <p>{item[1]}</p>
                    </li>
                ))}
            </ul>
        </>
    )
        
};