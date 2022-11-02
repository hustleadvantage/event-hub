declare namespace Eventbrite {
  type StructuredContent = {
    modules: StructuredContent.Module[];
  };

  namespace StructuredContent {
    type Image = {
      type: 'image';
      id: string;
      data: {
        image: {
          aspect_ratio: number;
          original: {
            height: number;
            width: number;
            url: string;
          };
        };
      };
    };

    type Text = {
      type: 'text';
      id: string;
      data: { body: { text: string } };
    };

    type Video = {
      type: 'video';
      id: string;
      data: {
        video: { embed_url: string; thumbnail_url: string; url: string };
      };
    };

    type Module = Image | Text | Video;
  }
}
