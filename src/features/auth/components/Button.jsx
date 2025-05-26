function Button({ label, onClick, isLoading }) {
  return (
    <button
      className={`py-2 px-5 ${isLoading ? 'bg-gray-400' : 'bg-dm-primary cursor-pointer'} text-dm-text font-ws font-normal md:font-medium text-sm md:text-base rounded-[10px] text-center`}
      type='submit'
      onClick={onClick}
      disabled={isLoading}
    >
      {label}
    </button>
  )
}

export default Button