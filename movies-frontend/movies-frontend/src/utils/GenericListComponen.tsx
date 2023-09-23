import Loading from "./Loading";

export default function GenericList(props: genericListProps) {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    } else {
      return <Loading />;
    }
  } else if (props.length == 0) {
    if (props.emptyListUI) {
      return props.emptyListUI;
    } else {
      return <div>No Data to show</div>;
    }
  } else {
    return props.children;
  }
}

interface genericListProps {
  list: any;
  loadingUI?: ReactElement;
  emptyListUI?: ReactElement;
  children?: ReactElement;
}
