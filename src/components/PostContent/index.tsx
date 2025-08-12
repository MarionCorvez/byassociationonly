import { promises as fs } from "fs";
import ArrowIcon from "../ui/ArrowIcon";
import Link from "next/link";

export default async function PostContent({
  isValue,
  isPartners,
}: {
  isValue: boolean;
  isPartners: boolean;
}) {
  if (isValue) {
    return (
      <section className="section-content">
        <h2 className="title heading-2">Our value added</h2>
        <ul className="list-assets">
          <li>Bespoke store features</li>
          <li>Tech integrations & optimisations</li>
          <li>Upsell features</li>
          <li>Unisex handling</li>
          <li>Retained services</li>
          <li>Flexibility for content creation</li>
          <li>Content curation templates</li>
          <li>Conversion rate optimisation</li>
          <li>Store switcher</li>
          <li>Addition of Algolia to improve search</li>
        </ul>
      </section>
    );
  } else if (isPartners) {
    return (
      <section className="section-content">
        <h2 className="title heading-2">In partners we trust</h2>
        <div className="panel-content">
          <p className="intro heading-4">
            VEYND runs a series of parallel international stores, powered by a
            number of key Shopify-connected technologies and partners.
          </p>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="section-content">
        <h2 className="title heading-2">Project Overview</h2>
        <div className="panel-content">
          <p className="intro heading-4">
            Sunspel runs a series of parallel international stores, powered by a
            number of key Shopify-connected technologies and partners.
          </p>
          <div className="txt-wrapper">
            <p className="details">
              Launched in early November 2023, the sportswear company offers
              alternative, darker sports pieces for the fashion-forward fitness
              fanatic that until now have been hard to find. Each garment is
              designed in moody tones with oversized silhouettes and structured
              tailoring. VEYND approached By Association Only to mirror this
              darker aesthetic online. We also maximised the brand’s opportunity
              to story-tell through full-page immersive campaign films and
              images.
            </p>

            <div className="link-wrapper">
              <Link href="#" prefetch={false} className="link">
                View live website
              </Link>
              <ArrowIcon cls="icon--sm" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/*   const file = await fs.readFile(
    process.cwd() + "/src/lib/data/partners.json",
    "utf8"
  );

  const datas = JSON.parse(file);

  const dataList = datas.map(
    (data: { id: number; title: string; content: string }) => (
      <div key={data.id} className="card-partner">
        <h3 className="head heading-3">{data.title}</h3>
        <p className="details">{data.content}</p>
      </div>
    )
  ); */

/*   return (
    <>
      <section className="panel-partners">
        {/*   <h2 className="title heading-2">Our value added</h2>
        <p className="intro heading-4">
          Sunspel runs a series of parallel international stores, powered by a
          number of key Shopify-connected technologies and partners.
        </p>
        <div className="txt-wrapper">
          <p className="details">
            Launched in early November 2023, the sportswear company offers
            alternative, darker sports pieces for the fashion-forward fitness
            fanatic that until now have been hard to find. Each garment is
            designed in moody tones with oversized silhouettes and structured
            tailoring. VEYND approached By Association Only to mirror this
            darker aesthetic online. We also maximised the brand’s opportunity
            to story-tell through full-page immersive campaign films and images.
          </p>

          <div className="link-wrapper">
            <Link href="#" prefetch={false} className="link">
              View live website
            </Link>
            <ArrowIcon cls="icon--sm" />
          </div>
        </div>
        {dataList}
        <ul className="list-assets list-assets--large">
          <li>Bespoke store features</li>
          <li>Tech integrations & optimisations</li>
          <li>Upsell features</li>
          <li>Unisex handling</li>
          <li>Retained services</li>
          <li>Flexibility for content creation</li>
          <li>Content curation templates</li>
          <li>Conversion rate optimisation</li>
          <li>Store switcher</li>
          <li>Addition of Algolia to improve search</li>
        </ul>
        <ul className="list-assets">
          <li>New store features & enhancements</li>
          <li>Enhanced flexibility for content creation</li>
          <li>
            Dedicated German French stores to allow for localised content for
            German and French store
          </li>
          <li>Improvement of product data management</li>
          <li>New app integrations</li>
          <li>Store switcher</li>
        </ul> */
/*         <ul>
          <Item
            isPacked={true}
            isAssets={false}
            name="Helmet with a golden leaf = isPacked"
          />
          <Item
            isPacked={false}
            isAssets={true}
            name="Photo of Tam = isAssets"
          />
          <Item
            isPacked={false}
            isAssets={true}
            name="Helmet with a golden leaf = isAssets"
          />
          <Item isPacked={false} isAssets={false} name="Photo of Tam = none" />
        </ul>
      </section>
    </>
  );
} */
