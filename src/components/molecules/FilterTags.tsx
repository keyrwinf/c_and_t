import Tag from "@/components/atoms/Tag";
import Button from "@/components/atoms/Button";

type FilterTagsProps = {
  tags: string[];
  onRemove: (tag: string) => void;
  onClear: () => void;
}

const FilterTags = ({ tags, onRemove, onClear }: FilterTagsProps) => {
  return (
    <div
      className="
        fixed top-[36px] left-1/2 transform -translate-x-1/2 bg-white text-primary p-4 z-10
        rounded-lg shadow-lg
        mobile:w-[90%] tablet:w-1/2
        flex gap-8 justify-between items-center
      "
    >
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <Tag key={tag} onRemove={() => onRemove(tag)}>{tag}</Tag>
        ))}
      </div>
      <Button label="Clear" onClick={onClear} />
    </div>
  );
};

export default FilterTags;