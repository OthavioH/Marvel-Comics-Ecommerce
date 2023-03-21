export interface IGetComicsResponse {
  code: number;
  status: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: [
      {
        id: number;
        digitalId: number;
        title: string;
        issueNumber: number;
        variantDescription: string;
        description: string;
        modified: string;
        isbn: string;
        upc: string;
        diamondCode: string;
        ean: string;
        issn: string;
        format: string;
        pageCount: number;
        textObjects: [
          {
            type: string;
            language: string;
            text: string;
          }
        ];
        resourceURI: string;
        urls: [
          {
            type: string;
            url: string;
          }
        ];
        series: {
          resourceURI: string;
          name: string;
        };
        variants: any[];
        collections: any[];
        collectedIssues: any[];
        dates: [
          {
            type: string;
            date: string;
          }
        ];
        prices: [
          {
            type: string;
            price: number;
          }
        ];
        thumbnail: {
          path: string;
          extension: string;
        };
        images: [
          {
            path: string;
            extension: string;
          }
        ];
        creators: {
          available: number;
          collectionURI: string;
          items: any[];
          returned: number;
        };
        characters: {
          available: number;
          collectionURI: string;
          items: any[];
          returned: number;
        };
        stories: {
          available: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
              type: string;
            }
          ];
          returned: number;
        };
        events: {
          available: number;
          collectionURI: string;
          items: any[];
          returned: number;
        };
      }
    ];
  };
  copyright: string;
}
