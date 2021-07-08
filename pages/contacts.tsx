import React, { useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Container from 'components/Container';
import CoverImage from 'components/Cover-image';
import Layout from 'components/Layout';
import ConfirmDialog from 'components/ConfirmDialog';
import Head from 'next/head';
import client from 'lib/apollo-client';
import CONTACTS_DATA from 'graphql/query/contacts_data';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from 'styles/form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { RecaptchaComponent } from 'components/Recaptcha';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { TITLE_NAME } from 'lib/constants';
import {
  SeoData,
  IndexContent,
  SeoOpenGraphs,
  SeoBreadcrumbJsonLd,
  Twitter,
} from 'graphql/types/types';
import { SeoContext } from './_app';
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

interface Actions {
  setSubmitting(flag: boolean): void;
  resetForm(): void;
}

interface Props {
  contents: Array<IndexContent>;
  openGraphs: Array<SeoOpenGraphs>;
  breadcrumbJsonLds: Array<SeoBreadcrumbJsonLd>;
  twitter: Twitter;
}

interface State {
  ok: boolean;
  msg?: Message;
}

interface Message {
  message?: string;
}

interface Values {
  company: string;
  name: string;
  email: string;
  content: string;
}

const Contacts: NextPage<Props> = ({
  contents,
  openGraphs,
  breadcrumbJsonLds,
  twitter,
}) => {
  const content = contents[0];
  const seoData: SeoData = {
    openGraphs: openGraphs[0],
    breadcrumbJsonLds,
    twitter,
  };

  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [serverState, setServerState] = useState<State>(Object);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const formSchema = Yup.object({
    name: Yup.string().required('ご担当者名は必須です'),
    company: Yup.string().required('御社名は必須です'),
    email: Yup.string()
      .email('メールアドレスの形式に誤りがあります')
      .required('メールアドレスは必須です'),
    content: Yup.string().required('お問い合わせ内容は必須です'),
  });

  const handleServerResponse = (ok: boolean, msg: Message) => {
    setServerState({ ok, msg });
  };

  const handleOnSubmit = async (values: Values, actions: Actions) => {
    if (!executeRecaptcha) {
      return;
    }
    try {
      await executeRecaptcha('homepage');
      const options: AxiosRequestConfig = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(values),
        url: 'https://itccorporation.jp/9002C5C065DA90D50808120E29FEDE3E',
      };
      await axios(options);
      setConfirmOpen(true);
      actions.setSubmitting(false);
      actions.resetForm();
      handleServerResponse(true, { message: 'Success!' });
    } catch (err) {
      actions.setSubmitting(false);
      handleServerResponse(false, err);
    }
  };
  return (
    <SeoContext.Provider value={seoData}>
      <Layout page="contact">
        <Container>
          <Head>
            <title>
              {content.title} | {`${TITLE_NAME}`}
            </title>
          </Head>
          <div className="mb-8">
            <CoverImage
              title={content.title}
              url={`${content.image.url}`}
              url_sp={`${content.image_sp.url}`}
            />
          </div>
          <div
            className="container px-6 md:px-0"
            /*  absolute center */
            style={{
              left: 0,
              right: 0,
              top: 110,
              position: 'absolute',
              margin: 'auto',
            }}>
            <p className="contact_title_jp">お問い合わせ</p>
            <p className="contact_title_en">CONTACT</p>
          </div>
          <div
            className="contactFormHeader"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
          <hr className="contact_hr mx-auto mt-10 mb-5" />
          <div className={styles.formArea}>
            <Formik
              initialValues={{
                company: '',
                name: '',
                email: '',
                content: '',
              }}
              validationSchema={formSchema}
              onSubmit={handleOnSubmit}>
              {({ isSubmitting, errors }) => (
                <Form>
                  {confirmOpen && (
                    <ConfirmDialog
                      title="メール送信完了"
                      open={confirmOpen}
                      onClose={() => setConfirmOpen(false)}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            'ありがとうございました。<br>迅速な回答を心がけておりますが、お問い合わせ内容によっては、回答にお時間がかかる場合がありますので、あらかじめご了承ください。',
                        }}
                      />
                    </ConfirmDialog>
                  )}
                  {serverState && serverState.ok && (
                    <p className="text-sm bg-green-100 text-green-700 mb-4 p-2 text-sm">
                      送信完了しました
                    </p>
                  )}
                  <div className={styles.formField}>
                    <div className={styles.formFieldName}>
                      <label htmlFor="company">
                        御社名
                        <span className={styles.formInputRequisite}>必須</span>
                        <ErrorMessage name="company">
                          {(msg) => (
                            <span
                              className={styles.invalidForm}
                              aria-live="polite">
                              <FontAwesomeIcon icon={faExclamationTriangle} />
                              {msg}
                            </span>
                          )}
                        </ErrorMessage>
                      </label>
                    </div>
                    <div className={styles.formFieldInput}>
                      <Field
                        name="company"
                        id="company"
                        type="text"
                        placeholder="会社名や団体名をご記入ください"
                        aria-required="true"
                        aria-invalid={errors.company ? 'true' : 'false'}
                      />
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <div className={styles.formFieldName}>
                      <label htmlFor="name">
                        ご担当者名
                        <span className={styles.formInputRequisite}>必須</span>
                        <ErrorMessage name="name">
                          {(msg) => (
                            <span
                              className={styles.invalidForm}
                              aria-live="polite">
                              <FontAwesomeIcon icon={faExclamationTriangle} />
                              {msg}
                            </span>
                          )}
                        </ErrorMessage>
                      </label>
                    </div>
                    <div className={styles.formFieldInput}>
                      <Field
                        name="name"
                        id="name"
                        type="text"
                        placeholder="ご担当者様のお名前をご記入ください"
                        aria-required="true"
                        aria-invalid={errors.name ? 'true' : 'false'}
                      />
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <div className={styles.formFieldName}>
                      <label htmlFor="email">
                        メールアドレス
                        <span className={styles.formInputRequisite}>必須</span>
                        <ErrorMessage name="email">
                          {(msg) => (
                            <span
                              className={styles.invalidForm}
                              aria-live="polite">
                              <FontAwesomeIcon icon={faExclamationTriangle} />
                              {msg}
                            </span>
                          )}
                        </ErrorMessage>
                      </label>
                    </div>
                    <div className={styles.formFieldInput}>
                      <Field
                        name="email"
                        id="email"
                        type="email"
                        placeholder="メールアドレスを正しくご記入ください"
                        aria-required="true"
                        aria-invalid={errors.email ? 'true' : 'false'}
                      />
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <div className={styles.formFieldName}>
                      <label htmlFor="content">
                        お問い合わせ内容
                        <span className={styles.formInputRequisite}>必須</span>
                        <ErrorMessage name="content">
                          {(msg) => (
                            <span
                              className={styles.invalidForm}
                              aria-live="polite">
                              <FontAwesomeIcon icon={faExclamationTriangle} />
                              {msg}
                            </span>
                          )}
                        </ErrorMessage>
                      </label>
                    </div>
                    <div className={styles.formFieldInput}>
                      <Field
                        name="content"
                        id="content"
                        component="textarea"
                        placeholder="お問い合わせ内容をご記入ください"
                        aria-required="true"
                        aria-invalid={errors.content ? 'true' : 'false'}
                      />
                    </div>
                  </div>
                  <div className={styles.formSubmit}>
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      id="submit"
                      title="入力内容を送信します"
                      className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg inline-flex items-center align-middle">
                      {isSubmitting ? (
                        <p>送信中...</p>
                      ) : (
                        <p>
                          入力内容の送信{' '}
                          <span className={styles.sendMark}></span>
                        </p>
                      )}
                    </button>
                    {serverState && (
                      <p
                        className={
                          !serverState.ok ? 'text-red-600 font-bold mt-5' : ''
                        }>
                        {serverState?.msg?.message}
                        {!serverState.ok &&
                          serverState?.msg?.message &&
                          ' : 申し訳ございません。エラーが発生しました。もう一度やり直してください。'}
                      </p>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <hr className="contact_hr mx-auto mt-5 mb-2" />
        </Container>
      </Layout>
    </SeoContext.Provider>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client.query({
    query: CONTACTS_DATA,
    variables: { slug: 'contacts' },
  });
  return {
    props: { ...data },
  };
};
export default RecaptchaComponent(Contacts);
