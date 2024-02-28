import './button.css';

interface ButtonProps{
    color?: string;
    label?:string;
    imageUrl?: string; // Nueva prop para la URL de la imagen
    onClick:()=>void;
}

export default function Button(props:ButtonProps){
    return (
        <button 
            className="rounded-full w-10 h-10"
            onClick={props.onClick}  
            style={{ backgroundImage: `url(${props.imageUrl})`, backgroundSize: 'cover' }} // Accediendo a imageUrl a través de props
        >
            {props.label}
        </button>
    )

}