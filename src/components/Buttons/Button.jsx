import './button.css'   

const Button = ({text}) => {
    return (
        <div className="buttons">
            <button className="button">{text}</button>
        </div>
    )
}

export default Button