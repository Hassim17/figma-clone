"use client";

import { CommentsOverlay } from "@/components/comments/CommentsOverlay";

export const Comments = () => (
	// <ClientSideSuspense fallback={null}>
	//   {() => <CommentsOverlay />}
	// </ClientSideSuspense>
	<CommentsOverlay />
);
