import Avatar from "@/components/atoms/Avatar";
import Badge from "@/components/atoms/Badge";
import Tag from "@/components/atoms/Tag";
import { Job } from "@/types";

type CardProps = {
  job: Job;
  tagsClicked: string[];
  onTagClick: (tag: string) => void;
  onClick?: () => void;
}

const Card = ({ job, tagsClicked = [], onTagClick, onClick }: CardProps) => {
  const tags = [job.postedAt, job.contract, job.location]

  return (
    <div
      className="
        flex relative gap-4 bg-white p-4 px-10 
        rounded-md items-center justify-between shadow-sm 
        cursor-pointer border-l-4 border-transparent hover:border-primary
        tablet:mb-0 tablet:flex-row tablet:items-center
        mobile:mb-8 mobile:flex-col mobile:items-start
      "
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <div className="flex gap-4 items-center tablet:border-0 mobile:border-b mobile:border-primary mobile:w-full mobile:pb-4">
        <div className="mobile:block tablet:hidden desktop:hidden absolute top-[-30px] left-[20px]">
          <Avatar src={job.logo} alt="avatar" height={60} width={60} />
        </div>
        <div className="mobile:hidden tablet:block desktop:block">
          <Avatar src={job.logo} alt="avatar" />
        </div>
        <div className="flex flex-col gap-2 mobile:mt-6">
          <div className="flex gap-2 items-center">
            <p className="text-primary font-bold">{job.company}</p>
            <div className="flex gap-2">
              {job.new && <Badge variant="primary">{job.new ? "New!" : ""}</Badge>}
              {job.featured && <Badge variant="secondary">{job.featured ? "Featured" : ""}</Badge>}
            </div>
          </div>
          <p className="text-sm text-secondary font-bold text-base">{job.position}</p>
          <div className="flex text-sm">
            {tags.join(" | ")}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {job.languages.map((language) => {
          const isClicked = tagsClicked.includes(language);
          console.log({ isClicked });
          return (
            <Tag
              key={language}
              isClicked={isClicked}
              onClick={() => onTagClick ? onTagClick(language) : null}
          >
              {language}
            </Tag>
          );
        })}
      </div>
    </div> 
  );
};

export default Card;
