"use client";
import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import {
  Copy,
  Check,
  Hash,
  Heart,
  Fire,
  User,
  GearSix,
  SignOut,
  WarningOctagon,
  ArrowSquareIn,
  X,
  Plus,
  EnvelopeSimple,
  WarningDiamond,
  Chat,
  Images,
  MagnifyingGlass,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import fs from "fs";
import remarkGfm from "remark-gfm";
import {
  Accordion,
  ActionButton,
  Alert,
  Animation,
  AspectRatio,
  AutocompleteField,
  Avatar,
  Backdrop,
  Badge,
  Box,
  Breadcrumb,
  Button,
  Card,
  Center,
  Checkbox,
  Chip,
  Circle,
  CloseButton,
  Collapse,
  ColorField,
  Container,
  Dialog,
  Divider,
  Drawer,
  Field,
  Flex,
  Form,
  Gradient,
  Grid,
  Hidden,
  Hide,
  Highlight,
  Icon,
  Image,
  Initials,
  Key,
  Link,
  List,
  Menu,
  Modal,
  NativeDateField,
  NativeSelectField,
  NumberField,
  Paper,
  PasswordField,
  PinField,
  Popover,
  Portal,
  Progress,
  Radio,
  SegmentedField,
  SelectField,
  Show,
  Skeleton,
  Spinner,
  Square,
  Stack,
  Switch,
  Table,
  Tabs,
  Text,
  TextareaField,
  TextField,
  Toaster,
  Tooltip,
  Transition,
  fr,
  usePrismaneTheme,
  usePrismaneColor,
  useToast,
} from "@prismane/core";
import {
  useAnimation,
  useCounter,
  useDebounce,
  useDimensions,
  useDraggable,
  useEmulatedFieldChange,
  useForm,
  useId,
  useIdle,
  useInterval,
  useKeyboardShortcut,
  useLocalization,
  useLocalStorage,
  useMediaQuery,
  useMemoization,
  useOutsideClick,
  usePrevious,
  useToggle,
} from "@prismane/core/hooks";
import {
  min,
  max,
  required,
  match,
  url,
  email,
  username,
} from "@prismane/core/validators";
// Content
import content from "@/content";
// Containers
import { Docs as DocsPage } from "@/containers/docs/Docs";

// Docs Components
import ColorPalette from "@/components/ColorPalette";
import Important from "@/components/Important";
import Components from "@/components/Components";
import ComponentsProps from "@/components/ComponentsProps";
import Hooks from "@/components/Hooks";
import ImageBanner from "@/components/ImageBanner";
import Community from "@/components/Community";

export async function getStaticPaths() {
  const paths = content.flatMap((parent: any) =>
    parent.items.map((child: any) => ({
      params: {
        category: parent.slug,
        slug: child.slug,
      },
    }))
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { category, slug } = params;

  const data = fs.readFileSync(`src/content/${category}/${slug}.mdx`, "utf-8");

  const source = await serialize(data, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      source,
      category,
      slug,
    },
  };
}

const HeadingLink = ({ children, ...props }: any) => {
  const router = useRouter();

  const id = children.props.children
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  const href = `${router.asPath}#${id}`;

  return (
    <NextLink
      href={href}
      className={`flex items-center gap-2 group transition-all ${
        children.type === "h2" ? "mt-10" : ""
      }`}
      style={{ scrollMarginTop: "120px" }}
      id={id}
      {...props}
    >
      {children}
      <Hash
        size={
          children.type === "h1"
            ? 32
            : children.type === "h2"
            ? 24
            : children.type === "h3"
            ? 20
            : 16
        }
        className="hidden group-hover:flex text-primary-500"
      />
    </NextLink>
  );
};

export default function Page(params: any) {
  const title = content
    .find((nav: any) => nav.slug === params.category)
    .items.find((item: any) => item.slug === params.slug).title;

  return (
    <>
      <Head>
        <title>Prismane / {title.toString() || "Docs"} </title>
        <meta
          name="description"
          content={`Explore the customizable ${title} component of Prismane. Discover the power of Prismane's ${title} component today.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DocsPage>
        {
          <MDXRemote
            {...params.source}
            components={{
              pre: ({ children, ...props }: any): any => {
                const language =
                  children.props.className?.replace("language-", "") || "jsx";

                const code = (children?.props.children?.trim() as string) || "";

                return (
                  <div className="flex flex-col gap-5 w-full">
                    <LiveProvider
                      disabled
                      code={code}
                      scope={{
                        Accordion,
                        ActionButton,
                        Alert,
                        Animation,
                        AspectRatio,
                        AutocompleteField,
                        Avatar,
                        Backdrop,
                        Badge,
                        Box,
                        Breadcrumb,
                        Button,
                        Card,
                        Center,
                        Checkbox,
                        Chip,
                        Circle,
                        CloseButton,
                        Collapse,
                        ColorField,
                        Container,
                        Dialog,
                        Divider,
                        Drawer,
                        Field,
                        Flex,
                        Form,
                        Gradient,
                        Grid,
                        Hidden,
                        Hide,
                        Highlight,
                        Icon,
                        Image,
                        Initials,
                        Key,
                        Link,
                        List,
                        Menu,
                        Modal,
                        NativeDateField,
                        NativeSelectField,
                        NumberField,
                        Paper,
                        PasswordField,
                        PinField,
                        Popover,
                        Portal,
                        Progress,
                        Radio,
                        SegmentedField,
                        SelectField,
                        Show,
                        Skeleton,
                        Spinner,
                        Square,
                        Stack,
                        Switch,
                        Table,
                        Tabs,
                        Text,
                        TextareaField,
                        TextField,
                        Toaster,
                        Tooltip,
                        Transition,
                        fr,
                        useAnimation,
                        useCounter,
                        useDebounce,
                        useDimensions,
                        useDraggable,
                        useEmulatedFieldChange,
                        useForm,
                        useId,
                        useIdle,
                        useInterval,
                        useKeyboardShortcut,
                        useLocalization,
                        useLocalStorage,
                        useMediaQuery,
                        useMemoization,
                        useOutsideClick,
                        usePrevious,
                        useToggle,
                        usePrismaneTheme,
                        usePrismaneColor,
                        useToast,
                        min,
                        max,
                        required,
                        match,
                        url,
                        email,
                        username,
                        Heart,
                        Fire,
                        User,
                        GearSix,
                        SignOut,
                        X,
                        Plus,
                        EnvelopeSimple,
                        WarningDiamond,
                        Chat,
                        Images,
                        MagnifyingGlass,
                        ShoppingCartSimple,
                        useState: React.useState,
                        useEffect: React.useEffect,
                        useRef: React.useRef,
                        React,
                      }}
                      language={language}
                      theme={{
                        plain: {
                          color: "#f472b6",
                        },
                        styles: [
                          {
                            types: ["prolog"],
                            style: {
                              color: "#ec4899",
                            },
                          },
                          {
                            types: ["comment"],
                            style: {
                              color: "#A0AEC0",
                              fontStyle: "italic",
                            },
                          },
                          {
                            types: ["builtin", "tag", "changed", "keyword"],
                            style: {
                              color: "#C678DD",
                            },
                          },
                          {
                            types: ["number", "inserted"],
                            style: {
                              color: "#f472b6",
                            },
                          },
                          {
                            types: ["constant"],
                            style: {
                              color: "#D19A66",
                            },
                          },
                          {
                            types: ["attr-name", "variable"],
                            style: {
                              color: "#86efac",
                            },
                          },
                          {
                            types: ["deleted", "string", "attr-value"],
                            style: {
                              color: "#7dd3fc",
                            },
                          },
                          {
                            types: ["selector"],
                            style: {
                              color: "#a5b4fc",
                            },
                          },
                          {
                            types: ["punctuation", "operator"],
                            style: {
                              color: "#ec4899",
                            },
                          },
                          {
                            types: ["function"],
                            style: {
                              color: "#fca5a5",
                            },
                          },
                          {
                            types: ["class-name"],
                            style: {
                              color: "#a5b4fc",
                            },
                          },
                          {
                            types: ["char"],
                            style: {
                              color: "#ec4899",
                            },
                          },
                        ],
                      }}
                    >
                      {language === "jsx" && (
                        <div className="flex p-5 border dark:border-base-800 dark:bg-[#0F0F0F] border-base-300 bg-base-50 rounded-md grow overflow-x-auto sm:overflow-x-visible">
                          <LivePreview className="flex w-full grow gap-5 flex-wrap" />
                        </div>
                      )}
                      <div className="relative w-full">
                        <LiveEditor
                          style={{
                            fontFamily: "monospace",
                            fontSize: "1rem",
                          }}
                          className="overflow-x-auto w-full bg-base-900 rounded-md"
                        />
                        <ActionButton
                          variant="primary"
                          color="pink"
                          icon={<Copy />}
                          pos="absolute"
                          t={fr(1.5)}
                          r={fr(1.5)}
                          size="sm"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              children?.props.children
                            );
                          }}
                        />
                      </div>
                    </LiveProvider>
                  </div>
                );
              },
              h1: ({ children, ...props }: any) => {
                return (
                  <HeadingLink>
                    <h1
                      className="text-base-900 dark:text-white text-3xl sm:text-4xl font-bold transition-all"
                      {...props}
                    >
                      {children}
                    </h1>
                  </HeadingLink>
                );
              },
              h2: ({ children, ...props }: any) => {
                return (
                  <HeadingLink>
                    <h2
                      className="text-base-800 dark:text-base-100 text-2xl sm:text-3xl font-bold transition-all"
                      {...props}
                    >
                      {children}
                    </h2>
                  </HeadingLink>
                );
              },
              h3: ({ children, ...props }: any) => {
                return (
                  <HeadingLink>
                    <h3
                      className="text-base-800 dark:text-base-100 text-lg sm:text-xl font-bold transition-all"
                      {...props}
                    >
                      {children}
                    </h3>
                  </HeadingLink>
                );
              },
              h4: ({ children, ...props }: any) => {
                return (
                  <HeadingLink>
                    <h4
                      className="text-base-800 dark:text-base-100 text-base sm:text-lg font-bold transition-all"
                      {...props}
                    >
                      {children}
                    </h4>
                  </HeadingLink>
                );
              },
              p: ({ children, ...props }) => (
                <p
                  className="text-base-700 dark:text-base-400 leading-7 w-full"
                  {...props}
                >
                  {children}
                </p>
              ),
              code: ({ children, ...props }) => (
                <code
                  className="text-primary-500 bg-primary-500/10 dark:bg-primary-700/10 px-1 sm:px-2 py-0.5 rounded-md text-sm sm:text-base"
                  {...props}
                >
                  {children}
                </code>
              ),
              li: ({ children, ...props }) => (
                <li className="dark:text-white text-base-800" {...props}>
                  - {children}
                </li>
              ),
              hr: ({ children, ...props }) => (
                <hr
                  className="bg-base-700 dark:bg-base-400 border-none h-px"
                  {...props}
                >
                  {children}
                </hr>
              ),
              table: ({ children, ...props }) => (
                <div className="w-full overflow-x-auto">
                  <table
                    className="dark:text-white text-base-800 text-sm sm:text-base w-full"
                    {...props}
                  >
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children, ...props }) => (
                <thead
                  className="dark:!bg-base-700/10 !bg-base-500/20 text-sm sm:text-base"
                  {...props}
                >
                  {children}
                </thead>
              ),
              tr: ({ children, ...props }) => (
                <tr
                  className="w-full border-b dark:border-base-700 border-base-300"
                  {...props}
                >
                  {children}
                </tr>
              ),
              td: ({ children, ...props }) => (
                <td className="px-2 sm:px-6 md:px-8 py-2.5" {...props}>
                  {children}
                </td>
              ),
              th: ({ children, ...props }) => (
                <th
                  className="px-2 sm:px-6 md:px-8 py-2.5 text-left"
                  {...props}
                >
                  {children}
                </th>
              ),
              a: ({ children, ...props }): any => (
                <NextLink
                  {...props}
                  target="_blank"
                  className="inline-flex items-center text-primary-500 gap-1 underline"
                >
                  {children} <ArrowSquareIn />
                </NextLink>
              ),
              ColorPalette,
              Important,
              Components,
              ComponentsProps,
              Hooks,
              ImageBanner,
              Community,
              Chip,
              Tabs,
              NextImage,
            }}
          />
        }
      </DocsPage>
    </>
  );
}
