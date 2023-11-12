import Tag from "../../common/Tag";
import { ContentType, INoteCard } from "../../../types/note";
import { formatDate } from "../../../utils/formatDate";

const NoteCard: React.FC<INoteCard> = ({
  date,
  author,
  title,
  tag,
  description,
}) => {
  const formattedDate = formatDate(date);

  return (
    <li className="w-full h-28 select-none rounded-lg border border-gray-200 hover:border-gray-300 active:border-gray-400 active:border-2 text-gray-700 py-4 px-3">
      <div className="flex items-center text-xs mb-2">
        <div className="tracking-wide font-semibold">{formattedDate}</div>
        <div className="ms-1">
          <span className="me-1 text-gray-500">by</span>
          <span className="font-semibold">{author}</span>
        </div>
      </div>
      <div className="flex items-center mb-1">
        <div className="font-bold text-lg">{title}</div>
        <Tag
          size="sm"
          className="ms-2"
          variant={
            tag === ContentType.Checked
              ? "done"
              : tag === ContentType.Critical
              ? "danger"
              : "info"
          }
        >
          {tag}
        </Tag>
      </div>
      <p className="text-sm">{description}</p>
    </li>
  );
};

export default NoteCard;
