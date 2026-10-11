/**
 * Renders a schema.org graph as JSON-LD. The data is static and author-controlled;
 * `<` is escaped anyway so no string in it can ever close the script tag early.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
