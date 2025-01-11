type TagProps = {
  children: React.ReactNode | string;
  isClicked?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
};

const Tag = ({ children, isClicked, onClick, onRemove }: TagProps) => {
  const showRemoveButton = onRemove !== undefined && typeof onRemove === "function";

  return (
    <div className="flex">
      <div
        className={`${isClicked ? "bg-primary text-white" : "bg-neutral text-primary"} p-2 text-xs cursor-pointer rounded-md uppercase flex items-center justify-center ${showRemoveButton ? "rounded-r-none" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      >
        <p className="font-bold">{children}</p>
      </div>
      {showRemoveButton && (
        <div
          className="bg-primary text-white p-2 text-xs cursor-pointer rounded-r-md uppercase flex items-center justify-center"
          onClick={onRemove ?? undefined}
        >
          <p className="font-bold">X</p>
        </div>
      )}
    </div>
  );
};

export default Tag;
