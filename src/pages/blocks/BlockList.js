import ListPage from "../../components/ListPage";
import BlockPreview from "../../components/pages/BlockList/BlockPreview";

export default function BlockList() {

    return (<ListPage basePath="blocks/" itemViewFn={block => (<BlockPreview key={block.id} block={block} />)} />);
}