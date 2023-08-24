import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type PostWhereInput = {
  author?: AuthorWhereUniqueInput;
  tags?: TagListRelationFilter;
};
