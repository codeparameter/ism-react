import ListPage from "../../components/ListPage";
import BlockPreview from "./components/BlockPreview";

export default function BlockList() {

    return (<ListPage basePath="blocks/" itemViewFn={block => (<BlockPreview key={block.id} block={block} />)} />);
}