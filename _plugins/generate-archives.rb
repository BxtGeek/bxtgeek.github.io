# frozen_string_literal: true

# Generates:
#   * per-author pages at /about/author/<slug>/
#   * per-tag pages     at /tags/<tag>/
#   * per-category pages at /categories/<category>/
#   * yearly archives   at /archive/<year>/
#
# The layouts do the actual post filtering; this plugin only emits the pages
# with the right metadata, so it stays small and easy to reason about.

require "jekyll"

module CorpIT
  class ArchiveGenerator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      posts = site.posts.docs.to_a
      normalize_taxonomies!(posts)

      generate_authors(site, posts)
      generate_taxonomy(site, posts, "tag", "tags")
      generate_taxonomy(site, posts, "category", "categories")
      generate_archive(site, posts)
    end

    private

    # Jekyll does not guarantee that `tags:` / `categories:` in front matter are
    # arrays, so coerce both into clean arrays once for every downstream use.
    def normalize_taxonomies!(posts)
      posts.each do |post|
        post.data["tags"] = clean_list(post.data["tags"])
        post.data["categories"] = clean_list(post.data["categories"])
      end
    end

    def clean_list(value)
      Array(value).map { |v| v.to_s.strip }.reject(&:empty?).uniq
    end

    def generate_authors(site, posts)
      authors = site.data["authors"] || {}
      authors.each_key do |slug|
        site.pages << page_for(
          site,
          "/about/author/#{slug}/",
          {
            "layout" => "author",
            "title" => authors.dig(slug, "name") || slug.to_s,
            "author_slug" => slug,
          }
        )
      end
    end

    def generate_taxonomy(site, posts, type, dir)
      # `type` is "tag"/"category", `dir` is "tags"/"categories".
      buckets = {}

      posts.each do |post|
        Array(post.data[dir]).each do |item|
          (buckets[item] ||= []) << post
        end
      end

      buckets.each do |name, _list|
        site.pages << page_for(
          site,
          "/#{dir}/#{Jekyll::Utils.slugify(name)}/",
          {
            "layout" => type,
            "title" => name,
            "#{type}" => name,
          }
        )
      end
    end

    def generate_archive(site, posts)
      posts.group_by { |p| p.date.year }.each do |year, _list|
        site.pages << page_for(
          site,
          "/archive/#{year}/",
          {
            "layout" => "archive",
            "title" => "#{year} archive",
            "year" => year,
          }
        )
      end
    end

    def page_for(site, permalink, data)
      dir = permalink.sub(%r{\A/}, "").sub(%r{/\z}, "")
      page = Jekyll::PageWithoutAFile.new(site, site.source, dir, "index.html")
      page.data.merge!(data)
      page.data["permalink"] = permalink
      page.data["generated"] = true
      page
    end
  end
end