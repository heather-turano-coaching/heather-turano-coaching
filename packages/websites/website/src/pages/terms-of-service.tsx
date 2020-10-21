import {
  Content,
  Section,
  Title
} from "@heather-turano-coaching/core/components";
import React, { FC } from "react";

import { Layout } from "../components/layout";

const TermsOfServicePage: FC = () => (
  <Layout pageTitle="Terms of Service">
    <Section styleType="layered">
      <Content>
        <Title size="lg" copy="Terms of Service" />
        <h1>1. Terms</h1>
        <p>
          By accessing the website at{" "}
          <a href="http://heatherturanocoaching.com">
            http://heatherturanocoaching.com
          </a>
          , you are agreeing to be bound by these terms of service, all
          applicable laws and regulations, and agree that you are responsible
          for compliance with any applicable local laws. If you do not agree
          with any of these terms, you are prohibited from using or accessing
          this site. The materials contained in this website are protected by
          applicable copyright and trademark law.
        </p>
        <h1>2. Use License</h1>
        <ol type="a">
          <li>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Heather Turano Coaching,
            LLC&apos;s website for personal, non-commercial transitory viewing
            only. This is the grant of a license, not a transfer of title, and
            under this license you may not:
            <ol type="i">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on Heather Turano Coaching, LLC&apos;s website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or &apos;mirror&apos;
                the materials on any other server.
              </li>
            </ol>
          </li>
          <li>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Heather Turano Coaching,
            LLC at any time. Upon terminating your viewing of these materials or
            upon the termination of this license, you must destroy any
            downloaded materials in your possession whether in electronic or
            printed format.
          </li>
        </ol>
        <h1>3. Disclaimer</h1>
        <ol type="a">
          <li>
            The materials on Heather Turano Coaching, LLC&apos;s website are
            provided on an &apos;as is&apos; basis. Heather Turano Coaching, LLC
            makes no warranties, expressed or implied, and hereby disclaims and
            negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </li>
          <li>
            Further, Heather Turano Coaching, LLC does not warrant or make any
            representations concerning the accuracy, likely results, or
            reliability of the use of the materials on its website or otherwise
            relating to such materials or on any sites linked to this site.
          </li>
        </ol>
        <h1>4. Limitations</h1>
        <p>
          In no event shall Heather Turano Coaching, LLC or its suppliers be
          liable for any damages (including, without limitation, damages for
          loss of data or profit, or due to business interruption) arising out
          of the use or inability to use the materials on Heather Turano
          Coaching, LLC&apos;s website, even if Heather Turano Coaching, LLC or
          a Heather Turano Coaching, LLC authorized representative has been
          notified orally or in writing of the possibility of such damage.
          Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </p>
        <h1>5. Accuracy of materials</h1>
        <p>
          The materials appearing on Heather Turano Coaching, LLC&apos;s website
          could include technical, typographical, or photographic errors.
          Heather Turano Coaching, LLC does not warrant that any of the
          materials on its website are accurate, complete or current. Heather
          Turano Coaching, LLC may make changes to the materials contained on
          its website at any time without notice. However Heather Turano
          Coaching, LLC does not make any commitment to update the materials.
        </p>
        <h1>6. Links</h1>
        <p>
          Heather Turano Coaching, LLC has not reviewed all of the sites linked
          to its website and is not responsible for the contents of any such
          linked site. The inclusion of any link does not imply endorsement by
          Heather Turano Coaching, LLC of the site. Use of any such linked
          website is at the user&apos;s own risk.
        </p>
        <h1>7. Modifications</h1>
        <p>
          Heather Turano Coaching, LLC may revise these terms of service for its
          website at any time without notice. By using this website you are
          agreeing to be bound by the then current version of these terms of
          service.
        </p>
        <h1>8. Governing Law</h1>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of Delaware and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </p>
        <p>
          Generated by{" "}
          <a
            title="Terms of Service Template Generator"
            href="https://getterms.io/"
          >
            GetTerms.io
          </a>
        </p>
      </Content>
    </Section>
  </Layout>
);

export default TermsOfServicePage;
