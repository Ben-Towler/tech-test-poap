import { Grid } from "@/app/components/Grid";
import { CollectionData } from "../common/types";
import { CollectionEmptyState } from "./CollectionEmptyState";
import { CollectionEventItem } from "./CollectionEventItem";
import { CollectionEventItemSkeleton } from "./CollectionEventItemSkeleton";

type Props = {
  data?: CollectionData[];
  isLoading: boolean;
}

export const DisplayCollections = ({ data, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Grid>
        <CollectionEventItemSkeleton />
        <CollectionEventItemSkeleton />
        <CollectionEventItemSkeleton />
        <CollectionEventItemSkeleton />
      </Grid>
    )
  }

  if (!data) {
    return <CollectionEmptyState />;
  }

  return (
    <Grid>
      {data.map(d => <CollectionEventItem key={d.tokenId} {...d} />)}
    </Grid>
  );
}
