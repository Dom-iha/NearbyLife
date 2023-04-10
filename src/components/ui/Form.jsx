const Form = ({className, children, onSubmit}) => {
    return (
        <form className={`h-fit mx-auto max-w-screen-sm ${className}`} onSubmit={onSubmit}>{children}</form>
    )
}

export default Form;