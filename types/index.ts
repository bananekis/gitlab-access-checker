interface GitLabEntity {
  id: number;
  name: string;
  description?: string;
  web_url?: string;
  path: string;
  visibility: string;
  auto_devops_enabled?: boolean | null;
  emails_disabled: boolean;
  emails_enabled?: boolean;
  lfs_enabled?: boolean;
}

interface Creator extends GitLabEntity {
  username: string;
  state: string;
  locked: boolean;
  avatar_url: string;
}

export interface Member extends Creator {
  access_level: 0 | 5 | 10 | 20 | 30 | 40 | 50;
  created_at: string;
  created_by: Creator;
  expires_at: string | null;
  is_using_seat: boolean;
  membership_state: string;
}

export interface GitLabGroup extends GitLabEntity {
  share_with_group_lock: boolean;
  require_two_factor_authentication: boolean;
  two_factor_grace_period: number;
  project_creation_level: string;
  subgroup_creation_level: string;
  mentions_disabled?: boolean | null;
  default_branch_protection: number;
  default_branch_protection_defaults: {
    allowed_to_push: Array<{ access_level: number }>;
    allow_force_push: boolean;
    allowed_to_merge: Array<{ access_level: number }>;
  };
  avatar_url?: string | null;
  full_name: string;
  full_path: string;
  created_at: string;
  parent_id?: number | null;
  organization_id: number;
  shared_runners_setting: string;
  ldap_cn?: string | null;
  ldap_access?: string | null;
  wiki_access_level: string;
}

export interface GitLabProject extends GitLabEntity {
  created_at: string;
  default_branch: string;
  name_with_namespace: string;
  path_with_namespace: string;
  tag_list: string[];
  topics: any[]; // Assuming it's an array of any type
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  readme_url?: string | null;
  forks_count: number;
  avatar_url?: string | null;
  star_count: number;
  last_activity_at: string;
  namespace: {
    id: number;
    name: string;
    path: string;
    kind: string;
    full_path: string;
    parent_id: number;
    avatar_url?: string | null;
    web_url: string;
  };
  container_registry_image_prefix: string;
  _links: {
    self: string;
    issues: string;
    merge_requests: string;
    repo_branches: string;
    labels: string;
    events: string;
    members: string;
    cluster_agents: string;
  };
  packages_enabled: boolean;
  empty_repo: boolean;
  archived: boolean;
  resolve_outdated_diff_discussions: boolean;
  container_expiration_policy: {
    cadence: string;
    enabled: boolean;
    keep_n: number;
    older_than: string;
    name_regex: string;
    name_regex_keep: any; // Assuming it can be any type
    next_run_at: string;
  };
  repository_object_format: string;
  issues_enabled: boolean;
  merge_requests_enabled: boolean;
  wiki_enabled: boolean;
  jobs_enabled: boolean;
  snippets_enabled: boolean;
  container_registry_enabled: boolean;
  service_desk_enabled: boolean;
  service_desk_address: string;
  can_create_merge_request_in: boolean;
  issues_access_level: string;
  repository_access_level: string;
  merge_requests_access_level: string;
  forking_access_level: string;
  builds_access_level: string;
  snippets_access_level: string;
  pages_access_level: string;
  analytics_access_level: string;
  container_registry_access_level: string;
  security_and_compliance_access_level: string;
  releases_access_level: string;
  environments_access_level: string;
  feature_flags_access_level: string;
  infrastructure_access_level: string;
  monitor_access_level: string;
  model_experiments_access_level: string;
  model_registry_access_level: string;
  shared_runners_enabled: boolean;
  creator_id: number;
  import_url?: string | null;
  import_type?: string | null;
  import_status: string;
  open_issues_count: number;
  description_html: string;
  updated_at: string;
  ci_default_git_depth: number;
  ci_forward_deployment_enabled: boolean;
  ci_forward_deployment_rollback_allowed: boolean;
  ci_job_token_scope_enabled: boolean;
  ci_separated_caches: boolean;
  ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
  build_git_strategy: string;
  keep_latest_artifact: boolean;
  restrict_user_defined_variables: boolean;
  runners_token: string;
  runner_token_expiration_interval?: string | null;
  group_runners_enabled: boolean;
  auto_cancel_pending_pipelines: string;
  build_timeout: number;
  auto_devops_deploy_strategy: string;
  ci_config_path: string;
  public_jobs: boolean;
  shared_with_groups: any[]; // Assuming it's an array of any type
  only_allow_merge_if_pipeline_succeeds: boolean;
  allow_merge_on_skipped_pipeline?: any; // Assuming it can be any type
  request_access_enabled: boolean;
  only_allow_merge_if_all_discussions_are_resolved: boolean;
  remove_source_branch_after_merge: boolean;
  printing_merge_request_link_enabled: boolean;
  merge_method: string;
  squash_option: string;
  enforce_auth_checks_on_uploads: boolean;
  suggestion_commit_message?: string | null;
  merge_commit_template?: string | null;
  squash_commit_template?: string | null;
  issue_branch_template?: string | null;
  warn_about_potentially_unwanted_characters: boolean;
  autoclose_referenced_issues: boolean;
  external_authorization_classification_label: string;
  requirements_enabled: boolean;
  requirements_access_level: string;
  security_and_compliance_enabled: boolean;
  compliance_frameworks: any[]; // Assuming it's an array of any type
}

export interface User {
  name: string;
  username: string;
  projects: string[];
  groups: string[];
}
